import React, {useState} from "react"

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
    let dropInfo = arrayState.stickers
    dropInfo.push([stickerState.id, e.pageX, e.pageY])
    setArrayState({stickers: dropInfo})
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
                    id="dragon"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="small fas fa-dragon"></i>
                </div>
                <div
                    id="cat"
                    draggable="true"
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    onDragEnd={dragEnd}
                >
                  <i className="small fas fa-cat"></i>
                </div>
                <div
                  id="fish"
                  draggable="true"
                  onDragStart={dragStart}
                  onDragOver={dragOver}
                  onDragEnd={dragEnd}
                >
                  <i className="small fas fa-fish"></i>
                </div>
                <button className="btn-floating black right" onClick={toggleStickers}>
                  <i className="tiny fas fa-eye"></i>
                </button>
            </div>

          {displayStickers}

      </div>
    </>
  )
}

export default StickerBoard