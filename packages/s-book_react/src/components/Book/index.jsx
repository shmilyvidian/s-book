import { graphql  } from 'react-apollo'
import { gql } from "apollo-boost"
import { useMutation, useQuery } from "@apollo/react-hooks"
import AddBook from '../AddBook'
import {
    Container,
    Card,
    CardHeader,
    Button,
    CardBody,
    Badge
} from "shards-react"
import './index.css'

const BookQuery = gql
    `query 
        { 
            books { name , id, genre } 
        }
    `
const DELETE_BOOK = gql`
    mutation($id: ID!) {
        deleteBook(id: $id){
            id
        }
    }
  `

const Book = ({ data = {} }) => {
    const books = data.books || []
    const [ deleteBook ] = useMutation(DELETE_BOOK);

    const { loading, refetch } = useQuery(BookQuery);
    if (loading) return (<div style={{ textAlign: "center" }}>loading</div>)
    
    return (
        <>
            {
                books.map(book => {
                    return (
                        <Container key={book.id} 
                            style={{margin: "30px 0 ", width: "600px"}}
                            className="container-div">
                            <Card>
                                <CardHeader>{book.name}</CardHeader>
                                <CardBody>
                                    <p>{book.genre}</p>
                                    <Button>查看更多 &rarr;</Button>
                                </CardBody>
                                <Badge theme="warning" className="span-btn"
                                onClick={()=>{
                                    deleteBook({ variables: { id: book.id } });
                                    refetch()
                                }}
                                >delete</Badge>
                            </Card>
                        </Container>
                    )
                }) 
            }
            <div className="div-add">
                <AddBook refetch={refetch}/>
            </div>
        </>
    )
}

export default graphql(BookQuery)(Book);
