document.addEventListener('DOMContentLoaded', function(){
  const buy = document.getElementById('buy');
  const sell = document.getElementById('sell');
  const qty = document.getElementById('qty');
  const btn = document.getElementById('calc');
  const res = document.getElementById('result');

  btn.addEventListener('click', () => {
    const b = parseFloat(buy.value) || 0;
    const s = parseFloat(sell.value) || 0;
    const q = parseFloat(qty.value) || 0;
    const profit = (s - b) * q;
    const perc = b === 0 ? 0 : ((s - b) / b) * 100;
    res.textContent = `Profit/Loss: ${profit.toFixed(2)}  |  Change: ${perc.toFixed(2)}%`;
  });
});
