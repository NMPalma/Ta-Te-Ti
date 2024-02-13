import './index.css'

const TURNS = {
  X: 'X',
  O: 'O'
}
const board = Array(9).fill(null)

function App() {
  return (
    <main className='board'>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <div className='cell' key={index}>
                <span className='cell__content'>
                  {index}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
