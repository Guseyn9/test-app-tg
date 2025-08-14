import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    setUser(tg.initDataUnsafe?.user || null);

    tg.MainButton.setText("Закрыть приложение");
    tg.MainButton.onClick(() => tg.close());
    tg.MainButton.show();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Привет из Telegram Mini App</h1>
      {user ? (
        <p>
          Вы зашли как <b>{user.first_name}</b> (@{user.username})
        </p>
      ) : (
        <p>Данные о пользователе не получены</p>
      )}
    </div>
  );
}

export default App;
