package com.jose.Bicho.full.Jogo.Educacional.repositories;

import com.jose.Bicho.full.Jogo.Educacional.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);
}
