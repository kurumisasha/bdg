document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');

    generateButton.addEventListener('click', function() {
        const cardNumber = document.getElementById('cardNumber').value.trim();
        if (cardNumber) {
            fetchVoucherDetails(cardNumber);
        } else {
            alert('Please enter a card number.');
        }
    });

    function fetchVoucherDetails(cardNumber) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/QYZMOD0/cards/${cardNumber}?tz=GBDLBYEJTC`;
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzIzMzUyMDc1LCJuYmYiOjE3MjMzNTExNzUsImlwQWRkcmVzcyI6IjE4MC4yNDkuMTg3LjE1MSIsIm9pZCI6IjIyNGQ1OWY2LTBmYTEtNDM2Zi05NmI1LWZhNWQ5NjVhNzNhYyIsInN1YiI6IjIyNGQ1OWY2LTBmYTEtNDM2Zi05NmI1LWZhNWQ5NjVhNzNhYyIsInBob25lIjoiKzYyODUxNTUxMDA5MzQiLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6Ijg0ZjNjNzljLTRjMDAtNDUzMy05NWM2LWRmMDI0MDQ1NmU1OSIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzIzMzUxMTc1fQ.fMM8KyIiU-YZjK9L8Xk85dQzQAWBvs0j-Yyhotthjbl20kKLwwsXZXc0lI1OyyUKapKICqwQpgcj1XHsVoSbBcL97yGuzJvkeWexCRyjqhza05tNR_H5fD5gXLvRgB65PQRlHchPKPt3Z1ZRRUIYgj6EhTcqAJeZ-8hGWWJWqdHx7WRYoCdm38pwgHxWP5GrlPfk46IGBE6LQpk_DeRPZqfIhMDW9R4LI4XsMZppXhwx8HBch8tHBnJcms1BMk2mFpj9rwFljgKhHK_0Y0igLXIbZDAYRItJcXmxNvsUuGf5BpKjQqjbEWJ7Sed-FSkT7yRwWg0KI0bXtxqKOOgi9g';

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            voucherDetails.innerHTML = `
                <p><strong>Voucher Code:</strong> ${data.voucher_code}</p>
                <p><strong>Amount:</strong> ${data.amount}</p>
                <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching voucher details:', error);
            voucherDetails.innerHTML = '<p>Failed to fetch voucher details.</p>';
        });
    }
});
