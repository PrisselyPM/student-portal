import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import { Select } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const Student = () => {
    const [loading,setLoading] = useState(true)
    const [students,setStudents] = useState([])
    const [filter,setFilter] = useState('All')

    useEffect(() => {

        fetchingStudents()
    })

    const fetchingStudents =  async ()  => {
        try {
            const data = await fetch('http://localhost:3001/student')
            const hasil = await data.json()
            setStudents(hasil)
            setLoading(false)
        } catch(error) {
            console.log(error)
        }

    }

    async function handleDelete (id){
        await fetch(`http://localhost:3001/student/${id}`, {
            method: 'DELETE',
        })
        fetchingStudents()
    }


    // if (loading) {
    //     return <p>Loading ...</p>
    // }

    return (
        <>
          <div className='student-data'>
            <Select className='student-filter' data-testid='filter' value={filter} onChange={(e) => setFilter(e.target.value)}> 
                <option value='All'>All</option>
                <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
                <option value='Fakultas Ilmu Sosial dan Politik'>Fakultas Ilmu Sosial dan Politik</option>
                <option value='Fakultas Teknik'>Fakultas Teknik</option>
                <option value='Fakultas Teknologi Informasi dan Sains'>Fakultas Teknologi Informasi dan Sains</option>
            </Select>
          </div>
            {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
          <Table variant="simple" id="table-student" border="1">
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Birth Date</Th>
                <Th>Gender</Th>
                <Th>Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filter === 'All' ? (
                students.map((student) => (
                  <Tr key={student.id} className="student-data-row">
                    <Td>{student.id}</Td>
                    <Td>
                      <Link style={{ color: 'black' }} to={`/student/${student.id}`}>
                        {student.fullname}
                      </Link>
                    </Td>
                    <Td>{student.birthDate}</Td>
                    <Td>{student.gender}</Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <button className='delete-btn' data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>
                        Delete
                      </button>
                    </Td>
                  </Tr>
                ))
              ) : (
                students
                  .filter((student) => student.faculty === filter)
                  .map((student) => (
                    <Tr key={student.id} className="student-data-row">
                      <Td>{student.id}</Td>
                      <Td>
                        <Link style={{ color: 'black' }} to={`/student/${student.id}`}>
                          {student.fullname}
                        </Link>
                      </Td>
                      <Td>{student.birthDate}</Td>
                      <Td>{student.gender}</Td>
                      <Td>{student.faculty}</Td>
                      <Td>{student.programStudy}</Td>
                      <Td>
                        <button className='delete-student' data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)}>
                          Delete
                        </button>
                      </Td>
                    </Tr>
                  ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}

      <Footer />
    </>
  );
};

export default Student;
