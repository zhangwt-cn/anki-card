package config

import (
	"github.com/spf13/viper"
	"log"
)

type Config struct {
	ServerPort    string
	SwaggerEnable bool
}

func LoadConfig() Config {
	viper.SetConfigFile("configs/config.yaml")
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalf("Error reading config file: %v", err)
	}

	return Config{
		ServerPort:    viper.GetString("server.port"),
		SwaggerEnable: viper.GetBool("swagger.enable"),
	}
}
