const URL = "https://dummyjson.com/users";

const keys = [
  "firstName",
  "lastName",
  "gender",
  "age",
  "phone",
  "address.city",
  "address.address",
];

// Это нехорошо, что функции для взаимодействия с "внешним миром" что-то знают про представление, но разделить у меня никак не получается( 
export async function getAllUsers(setErrorText, setStatus, setUsers) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      setStatus("success");
      setErrorText("");
      setUsers(data.users);
    })
    .catch((error) => {
      setStatus("error");
      setErrorText(error.message);
    });
}
export async function getFiltredUsers(
  search,
  setStatus,
  setUsers,
  setErrorText
) {
  setStatus("loading");
  setUsers([]);
  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    fetch(`${URL}/filter?key=${keys[i]}&value=${search}`)
      .then((response) => response.json())
      .then((data) => {
        arr.push(...data.users);
        // это чревато перерендерами (столько, сколько keys), но если вынести это за пределы цикла, не срабатывает. Полагаю, потому что нет "ожидания" в синхронном коде
        setUsers([...arr]);
      })
      .catch((error) => {
        setStatus("error");
        setErrorText(error.message);
      });
    setErrorText("");
    setStatus("success");
  }
}
