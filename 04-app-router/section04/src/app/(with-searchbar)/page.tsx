import ClinetCompnent from "../../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "../../components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClinetCompnent>
        {/* children으로 서버컴포넌트 props로 전달 */}
        <ServerComponent />
      </ClinetCompnent>
    </div>
  );
}
