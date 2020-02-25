import React, {useState, useEffect} from "react"
import StickerAPI from '../../utils/StickerAPI'

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

//Clicked on and started dragging a sticker...
  const dragStart = e => {
    const sticker_id = e.target.id
    setStickerState({...stickerState, id:sticker_id})
  }
//for dragging over other stuff.
  const dragOver = e => {
    e.stopPropagation()
  }
//END dragged sticker.
  const dragEnd = e =>{
    postSticker({animal: stickerState.id, positionX: e.pageX, positionY: e.pageY})
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
    //LOCAL ONLY
    // let dropInfo = arrayState.stickers
    // dropInfo.push([stickerState.id, e.pageX, e.pageY])
    // setArrayState({stickers: dropInfo})
  }

  const toggleStickers = () => {
    setStickerState({...stickerState, areShown: !stickerState.areShown})
  }

  const displayStickers = (stickerState.areShown && arrayState.stickers.length) ? arrayState.stickers.map(sticker => (
    <i 
    className={"small fas fa-" + sticker[0]}
    style={{opacity: "0.1", position: "absolute", left: `${sticker[1]}px`, top: `${sticker[2]}px`}}
    ></i>
  )) : null

  return (
    <>
      <div id="stickerContainer">
        {/* <Stickers/> */}
            <div className="row" id="stickerBar"> 
                <div
                    id="dove"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="fas fa-dove"></i>
                </div>
                <div
                    id="crow"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="fas fa-crow"></i>
                </div>
                <div
                    id="cat"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="fas fa-cat"></i>
                </div>
                <div
                  id="dog"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                >
                  <i className="fas fa-dog"></i>
                </div>
                <div
                  id="fish"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                >
                  <i className="fas fa-fish"></i>
                </div>
                <div
                    id="dragon"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="fas fa-dragon"></i>
                </div>
                <button className="btn-small btn-floating black" onClick={toggleStickers}>
                  <i className="fas fa-eye"></i>
                </button>
            </div>

          {displayStickers}

      </div>
    </>
  )
}

export default StickerBoard