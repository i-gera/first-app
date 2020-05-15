import React from "react";
import styles from "../../styles/Friends.module.css";
import userImg from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "./../common/Paginator";

let Friends = (props) => {
  return (
    <div>
      <Paginator
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={styles.blocks}>
            <div className={styles.block1}>
              <div className={styles.userimg}>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userImg
                    }
                    alt="img"
                  />
                </NavLink>
              </div>
              <div className={styles.followbtn}>
                {user.followed ? (
                  <button
                    disabled={props.followInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollowThunk(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    disabled={props.followInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.followThunk(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.block2}>
              <div>
                <p className={styles.username}>{user.name}</p>
                <p className={styles.status}>
                  {user.status != null ? user.status : "without status"}
                </p>
              </div>
              <div className={styles.location}>
                <p className={styles.country}>{"user.location.country"}</p>
                <p className={styles.city}>{"user.location.city"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
