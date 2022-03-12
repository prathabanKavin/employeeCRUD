package com.kavin.employeecrud.service.Impl;

import com.kavin.employeecrud.exception.ResourceNotFoundException;
import com.kavin.employeecrud.model.Employee;
import com.kavin.employeecrud.repository.EmployeeRepository;
import com.kavin.employeecrud.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(long id) {
        return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee", "ID", id));
    }
}
