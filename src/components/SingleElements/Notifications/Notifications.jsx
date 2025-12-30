import { useContext } from "react";
import { NoticeContext } from "../../../App";
import styles from "./Notifications.module.css";

function Notifications() {
  const { notices } = useContext(NoticeContext);

  let noticeElms = [];

  notices.forEach((notice, index) => {
    console.log("notice");
    console.log(notice.notice);

    let message;
    switch (notice.notice) {
      case "add":
        message = "Item(s) added to cart!";
        break;
      case "remove":
        message = "Item(s) removed from cart!";
        break;
      default:
        console.error("Notice type does not exist");
        break;
    }

    noticeElms.push(
      <div key={index} className={styles.noticeContainer}>
        {message}
      </div>
    );
  });

  return <div className={styles.noticesContainer}>{noticeElms}</div>;
}

//custom hook
export function useNotice() {
  const { setNotices } = useContext(NoticeContext);

  function pushNotice(notice) {
    const id = crypto.randomUUID();
    setNotices((prev) => [...prev, { id, notice }]);
    setTimeout(() => {
      setNotices((prev) => prev.filter((n) => n.id !== id));
    }, 2000);
  }

  return { pushNotice };
}

export default Notifications;
