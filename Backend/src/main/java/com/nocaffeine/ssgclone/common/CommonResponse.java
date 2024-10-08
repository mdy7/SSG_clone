package com.nocaffeine.ssgclone.common;

import com.nocaffeine.ssgclone.common.exception.ErrorCode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
public class CommonResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private Error error;
    public static <T> CommonResponse<T> success(String message) {
        return new CommonResponse<>(true, message, null,null);
    }

    public static <T> CommonResponse<T> success(String message, T data) {
        return new CommonResponse<>(true, message, data,null);
    }

    public static <T> CommonResponse<T> fail(ErrorCode code, String message) {
        return new CommonResponse<>(false, message, null, new Error(code));
    }

    public static <T> CommonResponse<T> fail(ErrorCode code, T data, String message) {
        return new CommonResponse<>(false, message, data, new Error(code));
    }
    @Getter
    @AllArgsConstructor
    static class Error {
        private ErrorCode code;
    }

}
