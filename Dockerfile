FROM node:22-alpine AS base

# Step 1: Dependencies & Sharp Native Bindings
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies and enforce linuxmusl-x64 Sharp binaries
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && corepack prepare pnpm@10.5.2 --activate && \
    pnpm i --frozen-lockfile && \
    pnpm add --save-optional @img/sharp-linuxmusl-x64; \
  elif [ -f package-lock.json ]; then \
    npm install && \
    npm install --os=linux --libc=musl --cpu=x64 sharp; \
  else \
    npm install && \
    npm install --os=linux --libc=musl --cpu=x64 sharp; \
  fi

# Step 2: Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN \
  if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm payload generate:importmap && pnpm run build; \
  else npx payload generate:importmap && npm run build; \
  fi

# Step 3: Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]