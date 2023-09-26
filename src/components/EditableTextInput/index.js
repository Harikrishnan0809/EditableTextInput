import {Component} from 'react'

import {
  EditableTextInputContainer,
  CartContainer,
  Heading,
  InputAndButtonContainer,
  Input,
  Button,
  Para,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {inputElement: '', isInput: true}

  onChangeInput = event => {
    this.setState({inputElement: event.target.value})
  }

  onClickButton = () => {
    this.setState(preVal => ({isInput: !preVal.isInput}))
  }

  render() {
    const {inputElement, isInput} = this.state
    const buttonText = isInput ? 'Save' : 'Edit'
    return (
      <EditableTextInputContainer>
        <CartContainer>
          <Heading>Editable Text Input</Heading>
          <InputAndButtonContainer>
            {isInput ? (
              <Input
                value={inputElement}
                onChange={this.onChangeInput}
                type="text"
              />
            ) : (
              <Para>{inputElement}</Para>
            )}
            <Button onClick={this.onClickButton}>{buttonText}</Button>
          </InputAndButtonContainer>
        </CartContainer>
      </EditableTextInputContainer>
    )
  }
}

export default EditableTextInput
