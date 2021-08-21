import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editPricingThunk } from "../../store/pricing";

export default function EditRate({pricing}) {
    const dispatch = useDispatch();
    const[rate, setRate] = useState(pricing.rate);

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("This is dispatch pricing",pricing.id)
        dispatch(editPricingThunk(pricing.id, {rate}))
        window.location.reload();
    }

    useEffect(() => {
        console.log("RERENDER")
    }, [rate])
    
    return (
        <form onSubmit={onSubmit} className="edit-rate">
            <div className="pricing-name">
                <div className="rate-change">
                    <input type="number" value={rate} onChange={e => setRate(e.target.value)}></input>
                </div>
                <button className='rate-btn' type="submit">Change rate</button>
            </div>
        </form>
    )
}