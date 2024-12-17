import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewBook from "./Pages/NewBook";
import Books from "./Pages/Books/Index";
import Home from "./Pages/Home";
import BooksUser from "./Pages/BooksUser";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="newBook" element={<NewBook />} />
                <Route path="/books" element={<Books />} />
                <Route path="/booksUser" element={<BooksUser />} />
            </Routes>
        </BrowserRouter>
    )
}