FROM denoland/deno:debian-1.32.1

EXPOSE 8000

WORKDIR /app

# USER deno

COPY ./src/deps.ts ./src/
COPY ./deno.jsonc ./
COPY ./deno.lock ./
RUN deno cache ./src/deps.ts

ADD ./src/ ./src/
ADD ./etc/ ./etc/
ADD ./.env ./
ADD ./.env.* ./
RUN deno cache ./src/main.ts

ENTRYPOINT []
CMD ["deno", "task", "start"]
