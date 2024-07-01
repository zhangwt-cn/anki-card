package response

import (
	"net/http"
)

type Response struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

// Success response
func Success(data interface{}) Response {
	return Response{
		Code:    http.StatusOK,
		Message: "Success",
		Data:    data,
	}
}

// Error response
func Error(code int, message string) Response {
	return Response{
		Code:    code,
		Message: message,
	}
}

// BadRequest response
func BadRequest(message string) Response {
	return Error(http.StatusBadRequest, message)
}

// InternalServerError response
func InternalServerError(message string) Response {
	return Error(http.StatusInternalServerError, message)
}
