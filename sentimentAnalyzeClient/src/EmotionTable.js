import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
render() {
        let resObject = Object.entries(this.props.emotions);

      return (  
        <div>           
          <table className="table table-bordered">
            <tbody>
            {
               resObject.map((value) =>
                                <>
                                    <tr>
                                        <td>{value[0]}</td>
                                        <td>{value[1]}</td>
                                    </tr>
                                </>
                            )
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;