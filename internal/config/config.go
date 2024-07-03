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
		log.Printf("Error reading config file: %v\n", err)
		return Config{
			ServerPort: ":9527",
		}
	}

	return Config{
		ServerPort: viper.GetString("server.port"),
	}
}
