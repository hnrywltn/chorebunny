// import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getChoreTypes} from '../../store/choreType.js';
import './homepage.css';


function Home() {
//bring in choretypes
  const dispatch = useDispatch();
  const choreTypes = useSelector(state => {
    return Object.values(state.choreType);
  });

  useEffect(() => {
    dispatch(getChoreTypes());
  }, [dispatch]);



// MAKE LINKS GO TO THE CREATE A CHORE FORM!!!!

  return (
    <>
      <h1 className="homeTitle">ChoreBunny</h1>
      <div className="categoriesContainer">

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[0]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(0,5).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[5]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(5, 10).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[10]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(10, 15).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[15]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(15, 20).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[20]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(20, 25).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[25]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(25, 30).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[30]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(30, 35).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>

        <div className="catBox">

          <h2 className="catTitle">{choreTypes[35]?.category}</h2>
          <ul className="catList">
            {choreTypes?.slice(35, 40).map(choreType => {
              return (
                <li key={choreType.id}>
                  <Link to="choreForm">{choreType.chore}</Link>
                  <p>{choreType.description}</p>
                </li>
              )
              })
            }
          </ul>
        </div>


      </div>
    </>
  );
}
export default Home;
