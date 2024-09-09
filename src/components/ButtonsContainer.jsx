
import Button from './Button';

const ButtonsContainer = ({handleClick}) => {

    const clickedNumber = (ev) => {

        const {value} = ev.target;

        handleClick(value);
    }

  return (
    <div className="container">
        {/* All the buttons in row one */}
        <div className="row1">
          
          <Button 
          className="btn btn-action"
          clickedNumber={clickedNumber}
          value="c"
          content="C"
          />

          <Button 
          className="btn btn-action"
          clickedNumber={clickedNumber}
          value="+/-"
          content="+/-"
          />

          <Button 
          className="btn btn-action"
          clickedNumber={clickedNumber}
          value="%"
          content="%"
          />
        
          <Button 
          className="btn btn-cal"
          clickedNumber={clickedNumber}
          value="/"
          content="÷"
          /> 

        </div>


        {/* All the buttons in row 2 */}
        <div className="row2">

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="7"
          content="7"
          />

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="8"
          content="8"
          />
          
          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="9"
          content="9"
          />

          <Button 
          className="btn btn-cal"
          clickedNumber={clickedNumber}
          value="*"
          content="*"
          />

        </div>
        {/* All the buttons in row 3 */}
        <div className="row3">

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="4"
          content="4"
          />

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="5"
          content="5"
          />

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="6"
          content="6"
          />
          
          <Button 
          className="btn btn-cal"
          clickedNumber={clickedNumber}
          value="-"
          content="-"
          />
          
        </div>

        {/* all the buttons in row 4 */}
        <div className="row4">

        <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="1"
          content="1"
          />

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="2"
          content="2"
          />

          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="3"
          content="3"
          />

          <Button 
          className="btn btn-calc"
          clickedNumber={clickedNumber}
          value="+"
          content="+"
          />

          
        </div>
        {/* All the buttons in row 5 */}
        <div className="row5">

        <Button 
          className="btn-0"
          clickedNumber={clickedNumber}
          value="0"
          content="0"
          />
          
          <Button 
          className="btn"
          clickedNumber={clickedNumber}
          value="."
          content="."
          />
          
          <Button 
          className="btn btn-calc"
          clickedNumber={clickedNumber}
          value="="
          content="="
          />
          
        </div>
      </div>
  )
}

export default ButtonsContainer;