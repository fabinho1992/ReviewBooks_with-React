import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function BooksUser() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await api.get('/api/Book');
                setBooks(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, []);

    async function BuscarLivorsUser(id) {
        try{
            const response = await api.get(`api/Book?id=${id}`);
            setBooks(response.data.data);
            console.log(response.data.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container-books-user">
            <div className="livros-usuario">
                <h1>Meus Livros</h1>
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <p>{book.genre}</p>
                        <p>{book.isbn}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearPublication}</p>
                        <p>{book.numberPages}</p>
                        <Link to={`/editBook/${book.id}`}><FiArrowLeft /></Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}