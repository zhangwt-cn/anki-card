package main

import (
	v1 "anki-card/api/v1"
	"anki-card/internal/config"
	"anki-card/web"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// @title Anki card API
// @version 1.0
// @description Anki card.
// @BasePath /api/v1
func main() {
	cfg := config.LoadConfig()

	router := gin.Default()
	v1.RegisterRoutes(router)

	// Static file route
	router.StaticFS("/", http.FS(web.Web))

	err := router.Run(cfg.ServerPort)
	if err != nil {
		log.Fatalf("Failed to run server: %v", err)
		return
	}
}
