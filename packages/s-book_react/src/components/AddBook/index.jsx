import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, Form, FormInput, FormGroup } from "shards-react";
import { gql } from 'apollo-boost'
import { useMutation } from "@apollo/react-hooks"
const ADD_BOOK = gql`
    mutation($name: String!, $genre: String!, $authorId:ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            genre
        }
    }
`


const AddBook = ({ refetch }) => {
    const [open, setOpen] = useState(false)
    const [book, setBook] = useState({
        name: '',
        genre: ''
    })
    const [addBook] = useMutation(ADD_BOOK)

    function toggle() {
        setOpen((prevState) => !prevState)
    }


    return (
        <div>
            <Button onClick={toggle}>添加书籍</Button>
            <Modal open={open} toggle={toggle}>
                <ModalHeader>添加</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <label htmlFor="#username">书籍名称</label>
                            <FormInput value={book.name} onChange={e => setBook({
                                ...book,
                                name: e.target.value
                            })} id="#name" placeholder="书籍名称" />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#password">题材</label>
                            <FormInput value={book.genre}
                                onChange={e => setBook({
                                    ...book,
                                    genre: e.target.value
                                })}
                                type="text" id="#genre" placeholder="题材" />
                        </FormGroup>
                        <Button onClick={async e => {
                            if (book.name && book.genre) {
                                await addBook({
                                    variables: {
                                        ...book,
                                        authorId: Math.random().toString(16).slice(2, 8)
                                    }
                                })
                                refetch()
                                toggle()
                            }

                        }}>提交</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddBook