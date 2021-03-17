import React from 'react'
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { obj } from './infoData';
import Request from './Request';

function Info() {

    const itemsPerPage = 3;
    const [page, setPage] = React.useState(1);
    const [noOfPages] = React.useState(
        Math.ceil(obj.length / itemsPerPage)
    );
      
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="requests__info">
            <div className="requests__info__container">
                <table className="requests__table">
                    <thead className="requests__table__head">
                        <tr className="requests__info__titles">
                            <th className="requests__info__title" scope="col">Подразделение</th>
                            <th className="requests__info__title" scope="col">Функция</th>
                            <th className="requests__info__title" scope="col">Инициатор заявки</th>
                            <th className="requests__info__title" scope="col">Должность</th>
                            <th className="requests__info__title" scope="col">Дата заявки</th>
                            <th className="requests__info__title" scope="col">Программа обучения</th>
                            <th className="requests__info__title" scope="col">Стоимость</th>
                            <th className="requests__info__title" scope="col">Статус заявки</th>
                        </tr>
                    </thead>
                    <tbody className="requests__table__body">
                    {   
                        obj.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(item => {
                            return(
                                <Request name={item.title}
                                func={item.func}
                                initiator={item.initiator}
                                position={item.position}
                                date={item.date}
                                program={item.program}
                                cost={item.cost}
                                status={item.status} />
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <Pagination 
                    page={page} 
                    defaultPage={1} 
                    count={noOfPages}
                    onChange={handleChange}
                    hidePrevButton 
                    hideNextButton
                     />
        </div>
    )
}

export default Info
