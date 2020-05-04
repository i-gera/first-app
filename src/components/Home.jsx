import React from 'react';
import style from './../styles/Home.module.css';

const Element = (props) =>{
    return(
        <div className={style.elemColumn}>
            <div className={style.elemImg}>
                <img src={props.img} alt="elemImg"/>
            </div>
            <div className={style.elemText}>{props.elemText}</div>
        </div>
        )
}

const Home = (props) => {
	return(
		<div>
        	<div className={style.topimage}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlQ9PJ4MTOlWHxRS48eqD3a1WzlqMSxNRZ-IdZxjME6xVPWgXS" alt="topimage" />
        	</div>
        	<div className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nisi quidem magnam aspernatur atque natus, aliquid tempore esse nihil! Accusamus quas quod, quis molestias dolore, nemo veritatis ducimus illo consequatur esse amet eligendi incidunt quos laudantium sunt deleniti magni ut autem non natus excepturi in. Non voluptatem quod fugiat ea atque delectus repellat at, rem nisi unde, quis illo sint ipsam numquam, architecto eius autem vero ducimus incidunt maxime quo. Ipsam numquam quibusdam atque quia dolorem velit, eaque, cupiditate nam! Nemo voluptas eius repellat quidem esse maiores adipisci laborum minima ducimus unde, veniam odit laboriosam. Voluptatum explicabo delectus facere natus!</div>
   		    <div className={style.info}>
                <Element elemText="Игровая" img="https://i.pinimg.com/originals/bf/67/c9/bf67c9a63b702deea17a141f138f0939.png"/>
                <Element elemText="Одежда" img="https://png.pngtree.com/png-vector/20191211/ourlarge/pngtree-kids-fashion-clothes-different-colors-free-vector-download-png-image_2077315.jpg"/>
                <Element elemText="Игрушки" img="https://cdn.dribbble.com/users/2108616/screenshots/6317481/logo-01.png"/>
            </div>
        </div> 		
		)
}

export default Home;