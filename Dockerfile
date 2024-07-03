# Use the official Golang image as the base image
FROM golang:1.21.4-alpine AS builder

# Set the current working directory inside the container
WORKDIR /app

# Copy the entire project
COPY . .

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Install upx and binutils
RUN apk add --no-cache upx binutils

# Build the Go app
RUN go build -ldflags="-s -w" -o /app/bin/anki-card ./cmd/anki-card/main.go

RUN strip /app/bin/anki-card

# Compress the binary
RUN upx -9 /app/bin/anki-card

# Use a smaller base image for the final build
FROM alpine:latest

# Copy the pre-built binary and config files from the builder stage
COPY --from=builder /app/bin/anki-card /app/
COPY --from=builder /app/configs /app/configs


# Command to run the executable
CMD ["/app/anki-card"]
