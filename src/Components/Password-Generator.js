export default function PasseordGenerator() {
  return (
    <>
      <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmFor="num">Password Generator</label>
          <input type="number" id="num" />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="upper" />
          <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="lower" />
          <label htmlFor="lower">Include LowerCase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="numbers" />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="symbol" />
          <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className="generate-btn">Generate Password</button>
        <div className='generated-password'>
            <input type='text' readOnly />
            <button className='copy-btn'>Copy</button>
        </div>
      </div>
    </>
  );
}
