import React, {useState, useEffect} from "react"
import StickerAPI from '../../utils/StickerAPI'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './stickerBoard.css'

const {getStickers, postSticker} = StickerAPI

const StickerBoard = () => {

//GRABBED sticker id
  const [stickerState, setStickerState] = useState({
    areShown: true,
    id: "",
  })

//ALL DRAGGED STICKERS
  const [arrayState, setArrayState] = useState({
    stickers: [],
  })

  //GRAB DATA
  useEffect(()=>{ 
    getStickers()
      .then(({data}) => {
        let stickerArray = []
        data.forEach(sticker => {
          let arr = []
          arr.push(sticker.animal, sticker.positionX, sticker.positionY)
          stickerArray.push(arr)
        })
        setArrayState({stickers: stickerArray})
      })
      .catch(e=>console.error(e))
    }, [])

  //SAVE AND POST THE DRAGGED STICKER
  const saveSticker = (xPercent, yPercent) => {
    if (xPercent > 0.09 && xPercent < .91 && yPercent > 0.05){
      sessionStorage.getItem("count") ? sessionStorage.setItem("count", parseInt(sessionStorage.getItem('count')) +1) :
      sessionStorage.setItem("count", 1)
      postSticker({animal: stickerState.id, positionX: xPercent, positionY: yPercent})
          .then(()=>{
            getStickers()
            .then(({data}) => {
              let stickerArray = []
              data.forEach(sticker => {
                let arr = []
                arr.push(sticker.animal, sticker.positionX, sticker.positionY)
                stickerArray.push(arr)
              })
              setArrayState({stickers: stickerArray})
            })
            .catch(e=>console.error(e))
          })
          .catch(e=>console.error(e))
    }
  }
//Clicked on and started dragging a sticker...
  const dragStart = e => {
    const sticker_id = e.target.id
    setStickerState({...stickerState, id:sticker_id})
  }
//for dragging over other stuff.
  const dragOver = e => {
    e.stopPropagation()
  }
  toast.configure();
  const toastOptions = {
    autoClose: 7000,
    hideProgressBar: true,
    type: "error"
  }
//END dragged sticker.
  const dragEnd = e =>{
    if (sessionStorage.getItem("count") <= 20) {
      let xPercent = (e.pageX-13)/window.innerWidth
      let yPercent = (e.pageY-13)/window.innerHeight
      saveSticker(xPercent, yPercent)
    } else {
      toast("You've reached the sticker limit (20).", toastOptions)
    }
  }

//TOUCH-DRAG functions
  const touchStart = e =>{
    // console.log(e.currentTarget.id)
    const sticker_id = e.currentTarget.id
    setStickerState({...stickerState, id:sticker_id})
  }
  // const touchOver = e => {
  //   e.preventDefault()
  //   e.stopPropagation()
  // }
  const touchEnd = e =>{
    if (sessionStorage.getItem("count") <= 20) {
      let xPercent = (e.nativeEvent.changedTouches[0].pageX-13)/window.innerWidth
      let yPercent = (e.nativeEvent.changedTouches[0].pageY-13)/window.innerHeight
      saveSticker(xPercent, yPercent)
    } else {
      toast("You've reached the sticker limit (20).", toastOptions)
    }
  }

  const toggleStickers = () => {
    setStickerState({...stickerState, areShown: !stickerState.areShown})
  }

  const tooltip = sessionStorage.getItem("count") ? null : <span className="tooltiptext">Everybody else is doing it...</span>

  const displayStickers = (stickerState.areShown && arrayState.stickers.length) ? arrayState.stickers.map(sticker => (
    <i 
    className={"small fas fa-" + sticker[0]}
    style={{ "z-index": "-2", opacity: "0.1", position: "absolute", left: `${sticker[1]*window.innerWidth}px`, top: `${sticker[2]*window.innerHeight}px`}}
    ></i>
  )) : null

  return (
    <>
      <div id="stickerContainer">
        {/* <Stickers/> */}
            <div className="row tooltip" id="stickerBar" > 
                {tooltip}
                <div
                  id="cat"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  // onTouchMove={touchOver} PROBABLY don't need this.
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-cat"></i>
                    </button>
                </div>
                <div
                  id="dog"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-dog"></i>
                    </button>
                </div>
                <div
                  id="fish"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-fish"></i>
                    </button>
                </div>
                <div
                  id="frog"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-frog"></i>
                    </button>
                </div>
                <div
                  id="crow"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-crow"></i>
                    </button>
                </div>
                <div
                  id="dragon"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                  >
                    <button className="btn-small btn-floating white">
                      <i id="barIcon" className="fas fa-dragon"></i>
                    </button>
                </div>
                <div className="toggletip">
                <button className="btn-small btn-floating black" onClick={toggleStickers}>
                  <i className="fas fa-eye"></i>
                </button>
                  <span className="toggletiptext">Show/hide stickers</span>
                </div>
            </div>
          <div id="displayStickers">
            {displayStickers}
          </div>
      </div>
    </>
  )
}

export default StickerBoard