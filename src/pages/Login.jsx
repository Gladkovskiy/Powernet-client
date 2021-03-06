import React, {useState} from 'react'
import {
  Card,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Dropdown,
} from 'react-bootstrap'
import UserStorage from '../store/UserStorage'
import {useNavigate} from 'react-router-dom'
import {MAIN_ROUTE} from '../utils/const'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isError] = useState(true)
  const [role, setRole] = useState('Выберите роль')
  const navigate = useNavigate()

  console.log(role)

  const confirmLogin = e => {
    e.preventDefault()
    console.log({login, password})
    UserStorage.setIsAuth(true)
    UserStorage.setRole(role)
    navigate(MAIN_ROUTE)
  }

  return (
    <Row>
      <Col md={6} xl={5} sm className="m-auto mt-5">
        <Card className="shadow border-0">
          <Card.Header className="mb-1 p-3 bg-secondary text-light">
            Aвторизация
          </Card.Header>
          <Card.Body>
            <Form>
              <FloatingLabel label="Login" className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="Login"
                  value={login}
                  onChange={({target: {value}}) => setLogin(value)}
                />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={({target: {value}}) => setPassword(value)}
                />
              </FloatingLabel>

              {/* временно для выбора роли */}
              <Dropdown>
                <Dropdown.Toggle variant="danger">{role}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setRole('ADMIN')
                    }}
                  >
                    ADMIN
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setRole('USER')
                    }}
                  >
                    USER
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="d-flex justify-content-end align-items-center">
                {isError && (
                  <span className="text-danger me-5">Неверный пароль</span>
                )}
                <Button
                  variant="outline-dark"
                  type="submit"
                  onClick={confirmLogin}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
