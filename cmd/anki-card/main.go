package main

import (
	v1 "anki-card/api/v1"
	_ "anki-card/docs" // 引入生成的文档文件
	"anki-card/internal/config"
	"anki-card/web"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
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
	router.StaticFS("/index", http.FS(web.Web))

	// Swagger route
	if cfg.SwaggerEnable {
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	}

	err := router.Run(cfg.ServerPort)
	if err != nil {
		log.Fatalf("Failed to run server: %v", err)
		return
	}
}
