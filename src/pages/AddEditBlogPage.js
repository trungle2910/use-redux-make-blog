import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import authActions from "../redux/actions/blog.actions";
import routeActions from "../redux/actions/route.actions";

// import routeActions from "../redux/actions/route.actions";

const AddEditBlogPage = () => {
  // const redirectTo = useSelector((state) => state.route.redirectTo);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    images: "",
  });
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.blogsAdd(formData));
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [dispatch, history, redirectTo]);

  return (
    <Container>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "columns",
            justifyContent: "center",
          }}
        >
          <Form style={{ width: "25em" }} onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "cyan" }}>Add Blog</h1>
            <Form.Group>
              <Form.Control
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
                style={{ height: "20em" }}
              />
            </Form.Group>
            <div>
              <Form.Group>
                <Form.Control
                  name="images"
                  placeholder="images url"
                  value={formData.images}
                  onChange={handleChange}
                  // style={{  }}
                />
              </Form.Group>
            </div>
            <div>
              <Button className="mr-2" type="submit">
                Submit
              </Button>
              <Button variant="light" style={{ width: "18em" }} type="submit">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEditBlogPage;
