import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [idUser, setId] = useState('');
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

    async function DeleteBook(id) {
        try {
            await api.delete(`api/Book?id=${id}`);

            setBooks(books.filter(book => book.id !== id));

            navigate('/books');
        } catch (error) {
            alert('Error deleting book, try again!');
        }
    }

    async function BuscarLivrosUser(idUser) {
        try {

            localStorage.setItem('id', idUser);
            navigate('/booksUser');
            
        } catch (error) {
            console.error(error);
        }
    }

    
    return (
        <div className="container-principal">
            <header className="header-Books">
                <h1>Lista de Livros</h1>
                <div className="livros-usuario">
                <label>Digite seu id para vizualizar os livros :</label>
                <input type="text" placeholder="Digite seu Id" value={idUser} onChange={e => setId(e.target.value)} />
                <button onClick={() => BuscarLivrosUser(idUser)} >Buscar</button>
                </div>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} height={16} color="#0e0e10" />
                    Voltar
                </Link>
                
            </header>
            <div className="container-books">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <h2>{book.title}</h2>
                        <p><strong>Id:</strong> {book.id}</p>
                        <p><strong>Autor:</strong> {book.author}</p>
                        <p><strong>Gênero:</strong> {book.generBook}</p>
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                        <p><strong>Editora:</strong> {book.publisher}</p>
                        <p><strong>Ano de publicação:</strong> {book.yearPublication}</p>
                        <p><strong>Número de páginas:</strong> {book.numberPages}</p>
                        <p><strong>Descrição:</strong> {book.description}</p>
                       
                        <FiTrash2 size={25} color='#2a20e0' className="delete-icon" onClick={() => DeleteBook(book.id)} type="button" />

                    </div>
                ))}
            </div>
        </div>
    );
}