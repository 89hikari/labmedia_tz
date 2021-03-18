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
                <div className="requests__info__titles">
                    <div className="requests__info__titles__title" scope="col">Подразделение</div>
                    <div className="requests__info__titles__title" scope="col">Функция</div>
                    <div className="requests__info__titles__title" scope="col">Инициатор заявки</div>
                    <div className="requests__info__titles__title" scope="col">Должность</div>
                    <div className="requests__info__titles__title" scope="col">Дата заявки</div>
                    <div className="requests__info__titles__title" scope="col">Программа обучения</div>
                    <div className="requests__info__titles__title" scope="col">Стоимость</div>
                    <div className="requests__info__titles__title" scope="col">Статус заявки</div>
                </div>
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
                    <Pagination 
                    page={page} 
                    defaultPage={1} 
                    count={noOfPages}
                    onChange={handleChange}
                    hidePrevButton 
                    hideNextButton
                     />
            </div>
        </div>
    )
}

export default Info
