import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { getChoreTypes } from '../../store/choreType.js';
import { getUsers } from '../../store/user.js';
import { getPricings } from '../../store/pricing.js';
import { getChores } from '../../store/chore.js';
import { addChore } from '../../store/chore.js';


const ChoreForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const users = useSelector(state => state.users);
    const pricings = Object.values(useSelector(state => state.pricings));
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [bunnyId, setBunnyId] = useState('');
    const [userId, setUserId] = useState(user?.id);
    const [choreId, setChoreId] = useState(1);
    const [bunnyComplete, setBunnyComplete] = useState(false);
    const [userComplete, setUserComplete] = useState(false);
    const [address, setAddress] = useState('');
    const [detail, setDetail] = useState('');
    const [total, setTotal] = useState(0);
    const [showBunnySelectionForm, setBunnySelectionForm] = useState(false);
    if (id) {
        setChoreId(id);
    }
    const choreTypes = useSelector(state => {
        return state.choreType;
    });
    const chores = useSelector(state => {
        return Object.values(state.chores);
    });


    useEffect(() => {
        dispatch(getChoreTypes());
        dispatch(getUsers());
        dispatch(getPricings());
        dispatch(getChores());
    }, [dispatch]);


    const choreSubmit = async (e) => {
        e.preventDefault();
        setBunnySelectionForm(true);
        return;
    };
    const bunnySubmit = async (e) => {
        e.preventDefault();
        dispatch(addChore({
            bunnyId, userId, choreId, address, detail, total
        }))
        history.push('/');
    };
    const updateAddress = (e) => {
        setAddress(e.target.value);
    };
    const updateDetail = (e) => {
        setDetail(e.target.value);
    };

    let choreForm;
    let bunnyForm;
    let pricing = pricings.filter(pricing => pricing.choreId == choreId);

    choreForm = (
        <>
            <form onSubmit={choreSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type='text'
                        name='address'
                        value={address}
                        onChange={updateAddress} />
                </div>
                <div>
                    <label>Detail</label>
                    <input
                        type='text'
                        name='detail'
                        value={detail}
                        onChange={updateDetail} />
                </div>
                <button type='submit'>Chore Submit</button>
            </form>
        </>
    )
    bunnyForm = (
        <>
            <form onSubmit={bunnySubmit}>
                {pricing.map(price => {
                    return (
                        <div key={price.userId}>
                            <label>
                                <input
                                    type='radio'
                                    value={price.userId}
                                    onChange={e => setBunnyId(e.target.value)}
                                />
                                {users[price.userId]?.name}
                                {price.rate}
                            </label>
                        </div>
                    )
                })}
                <button type='submit'>Bunny Select</button>
            </form>
        </>
    )
    // let formDom = showBunnySelectionForm ? bunnyForm : choreForm;
    return (
        <>
            {showBunnySelectionForm ? bunnyForm : choreForm}
        </>
    )
};

export default ChoreForm;
