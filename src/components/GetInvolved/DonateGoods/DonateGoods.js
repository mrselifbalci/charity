import React from 'react';
import './DonateGoods.css';
import imageHeader from './Rectangle 26.png';
import image2 from './nick-de-partee-5DLBoEX99Cs-unsplash 1 (1).png';
import image1 from './nick-de-partee-5DLBoEX99Cs-unsplash 1.png';
import Modal from 'react-modal'

const customStyles = {
    content : {
      position              : 'absolute',
      top                   : '38%',
      left                  : '50%',
      right                 : '50%',
      bottom                : '60%',
      marginRight           : '-50%',
      marginTop             : '120px',
      transform             : 'translate(-50%, -50%)',
      height                : 'fit-content',
      backgroundColor       : '#76A9C7',
      padding               : '10px',
      width                 : '40%',
      fontFamily            : 'Roboto',
      fontStyle             : 'normal',
      fontWeight            : 'normal',
      fontSize              : 'large',
      lineHeight            : '28px',
      color                 : 'white',
      marginBottom          : '450px'
    }
  };

const DonateGoods = () => {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function closeModal(){
        setIsOpen(false);
      }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }

	return (
		<div className="donate-goods">
			<div className="donate-goods-container">
				<img src={imageHeader} alt="Avatar" className="donate-goods-image" />
				<div className="donate-goods-overlay" ><h1 className="donate-goods-text">Donate Goods</h1></div>
                
			</div>
			<div className="cantent">
				<div className="cantent1">
					<div className="image-1"/>
					<p className="content1-p">
						Just because you no longer need an item, don’t throw it away. By donating it to us you’re not
						only keeping it out of landfill, but you’re also making sure it goes to a new home, while also
						doing something to help others.
					</p>
				</div>
				<div className="cantent2">
					<p className="content2-p">
						<h4>What we can and can't collect</h4> It goes without saying that we need to be able to re-sell items,
						but if a piece of furniture is a little bit battered and worn we can sometimes give it a new
						lease of life in our upcycling workshops. <br />
                        <a onClick={() => setIsOpen(true)}>Find out what you can donate?</a>
					</p>
                    <div className="image-2"/>
				</div>
        <div>
        <button className="donate-goods-btn" >Donate Goods Now</button>
      </div>
			</div>
            <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
            >
               Our chain of 600 shops are all really grateful for any of the below donations. They fly off our shelves and help us raise vital funds.
<br />
<br />
-Men’s, women’s and children’s clothing <br />
-Accessories including shoes, belts, handbags and jewellery <br />
-Quality homeware - anything from cushions to crockery <br />
-Linens <br />
-Books, CDs, DVDs <br />
-Electricals and furniture. Please check with your local shop before you donate these. Furniture and soft furnishings can only be accepted if they are new, and if they meet fire safety standards. <br />
-Please note that we cannot accept used household items (including electrical items). <br />
-Unfortunately, there are a few things that we can't sell - white goods such as washing machines and fridges and damaged or broken toys. <br />
            </Modal>
		</div>
	);
};

export default DonateGoods;