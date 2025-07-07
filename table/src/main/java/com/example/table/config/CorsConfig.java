package com.example.table.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {

    @Bean
    UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173")); // 필요한 Origin 추가
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE")); // 필요한 메서드 추가
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization")); // 필요한 헤더 추가
        configuration.setAllowCredentials(true); // 필요한 경우 true로 설정
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
