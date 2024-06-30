document.getElementById('computeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const response = await fetch('YOUR_API_GATEWAY_URL/compute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b })
    });
    const data = await response.json();
    document.getElementById('result').innerText = `Result: ${data.c}`;
});

