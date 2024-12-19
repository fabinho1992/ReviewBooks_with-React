import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../Services/api";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import "./style.css";


export default function NewBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [yearPublication, setPublicationYear] = useState('');
    const [numberPages, setNumberOfPages] = useState('');

    const navigate = useNavigate();

    async function CreateNewBook(event) {
        event.preventDefault();

        const data = {
            title,
            author,
            description,
            genre,
            isbn,
            publisher,
            yearPublication,
            numberPages,
        };

        try {
            const response = await api.post('api/Book', data);
            console.log(response.data);

            navigate('/books');
        } catch (error) {
            console.error(error);
            console.log(data.publicationYear);
        }
    }

    return (
        <div className="container-principal">
            <header className="header-newBook">
                <h3>Sistema de avaliação de livros</h3>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} height={16} color="#0e0e10" />
                    Voltar
                </Link>
            </header>
            <main>
                <div className="container">
                    <h1>Novo Livro</h1>
                    <div className="secao-form">
                        <form className="form" onSubmit={CreateNewBook}>
                            <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                                <option value="">Selecione um gênero</option>
                                <option value="Romance">Romance</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="ScienceFiction">ScienceFiction</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Documentary">Documentary</option>
                            </select>
                            <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                            <input type="text" placeholder="Editora" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                            <input type="number" placeholder="Ano da pulicação" value={yearPublication} onChange={(e) => setPublicationYear(e.target.value)} />
                            <input type="number" placeholder="Numero de paginas" value={numberPages} onChange={(e) => setNumberOfPages(e.target.value)} />

                            <button type="submit">Salvar</button>
                        </form>
                    </div>

                </div>
            </main>

        </div>

    );
}