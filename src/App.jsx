import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    setUser(tg.initDataUnsafe?.user || null);
    console.log("initDataUnsafe:", tg.initDataUnsafe);

    tg.MainButton.setText("Закрыть приложение");
    tg.MainButton.onClick(() => tg.close());
    tg.MainButton.show();
  } else {
    console.warn("Telegram WebApp SDK не доступен");
  }
}, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Привет из Telegram Mini App</h1>
      {user ? (
        <p>
          Вы зашли как <b>{user.first_name}</b> (@{user.username})
        </p>
      ) : (
        <p>Данные о пользователе не получены Данные о пользователе: {window.Telegram.WebApp.initDataUnsafe}</p>
      )}
    </div>
  );
}

export default App;
