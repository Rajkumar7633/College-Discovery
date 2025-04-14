"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call
    // For demo purposes, we'll simulate a successful login if the email contains "test"
    if (email.includes("test") || email === "admin@example.com") {
      const user = {
        id: "1",
        name: email.split("@")[0],
        email,
      }
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      return
    }

    // Simulate login with stored users
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      }
      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)
      return
    }

    throw new Error("Invalid credentials")
  }

  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call
    // For demo purposes, we'll store the user in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error("User already exists")
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In a real app, this would be hashed
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    // Auto login after registration
    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{!loading && children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
