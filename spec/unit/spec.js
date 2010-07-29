
describe 'Cell'
  before_each 
    cell = new Cell
  end
  describe '- initially dead'
    it 'should be dead by default'
      cell.isAlive().should_be(false)
    end
    it 'should come alive with three neighbors'
      cell.tick(3).isAlive().should_be(true)
    end
    it 'should not come alive with two neighbors'
      cell.tick(2).isAlive().should_be(false)
    end
    it 'should not come alive with one neighbor'
      cell.tick(1).isAlive().should_be(false)
    end
  end
  describe '- initially alive'
    before_each
      cell.alive = true
    end
    it 'should be alive'
      cell.isAlive().should_be(true)
    end
    it 'should die due to underpopulation (1 neighbor)'
      cell.tick(1).isAlive().should_be(false)
    end
    it 'should die due to overcrowding (more than 3 neighbors)'
      cell.tick(4).isAlive().should_be(false)
    end
    it 'should stay alive with two or three neighbors'
      cell.tick(2).isAlive().should_be(true)
      cell.tick(3).isAlive().should_be(true)
    end
  end
end
