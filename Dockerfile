# Use the official Golang image as the base image
FROM golang:1.21.4-alpine AS builder

# Set the current working directory inside the container
WORKDIR /app

# Copy the entire project
COPY . .

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Build the Go app
RUN go build -ldflags="-s -w" -o /app/bin/anki-card ./cmd/anki-card/main.go

# Use a smaller base image for the final build
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the pre-built binary and config files from the builder stage
COPY --from=builder /app/bin/anki-card /app/anki-card
COPY --from=builder /app/configs /app/configs

# Expose the port the app runs on
EXPOSE 9527

# Command to run the executable
CMD ["/app/anki-card"]
