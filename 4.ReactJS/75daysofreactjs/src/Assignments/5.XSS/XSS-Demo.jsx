import { useState, useEffect } from "react";
import styled from "styled-components";
import DOMPurify from "dompurify";

console.log("DOMP:", DOMPurify.sanitize);

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.div`
  color: #555;
`;

const XSSTodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("userName", "xdankit");
    localStorage.setItem("userToken", "Welcome@12345");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Card key={todo.id}>
          <Title>{todo.title}</Title>
          <Description
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(todo.description),
            }}
          />
        </Card>
      ))}
    </div>
  );
};

export default XSSTodoList;
