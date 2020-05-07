import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '../../components/atoms/TextField'
import TextArea from '../../components/atoms/TextArea'
import Button from '../../components/atoms/Button'
import LabelButton from '../../components/atoms/LabelButton'
import { colors } from '../../styles/variable'

const Container = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }

  textarea {
    min-height: 150px;
  }
`

const Title = styled.h2`
  padding: 0 8px;
`

const Form = styled.div`
  padding: 32px 0;
  padding-bottom: 16px;
`
const Field = styled.div`
  padding: 16px;
`
const Label = styled.label`
  display: block;
  padding: 8px 0;
`

const MessageContainer = styled.div`
  padding: 16px;
  min-height: 100px;
`

const ErrorMessage = styled.p`
  color: ${colors.danger};
  background: #d73a4959;
  padding: 8px;
  border-radius: 6px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`

const NewIssue = ({ user, onSubmit, onClose }) => {
  const [validationError, setValidationError] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const _onSubmit = useCallback(() => {
    if (!title) {
      setValidationError('タイトルを入力してください')
      return
    }

    if (!body) {
      setValidationError('説明を入力してください')
      return
    }

    onSubmit({
      issue: {
        title,
        body
      }
    })
  }, [title, body, onSubmit, setValidationError])

  return (
    <Container>
      <Title>Issueを追加</Title>
      <Form>
        <Field>
          <Label>タイトル</Label>
          <TextField
            value={title}
            placeholder="タイトルを入力してください"
            onChangeText={setTitle}
          />
        </Field>
        <Field>
          <Label>説明</Label>
          <TextArea
            value={body}
            placeholder="説明を入力してください"
            onChangeText={setBody}
          />
        </Field>
      </Form>
      <MessageContainer>
        {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
      </MessageContainer>
      <Footer>
        <Button type="primary" onClick={_onSubmit}>
          作成
        </Button>
        <LabelButton onClick={onClose}>閉じる</LabelButton>
      </Footer>
    </Container>
  )
}

NewIssue.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
}

export default NewIssue
