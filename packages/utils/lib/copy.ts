export async function copy(command: string) {
  if (navigator.clipboard.writeText) {
    navigator.clipboard.writeText(command);
  } else {
    // 旧
    const input = document.createElement('input');
    input.value = command;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    input.className = 'input';
    input.style.display = 'none';
  }
}
