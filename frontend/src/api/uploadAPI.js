export async function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);

  const res = await fetch("http://localhost:5000/upload", {
    method: "POST",
    body: form
  });

  return res.json(); // { success, data }
}
